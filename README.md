
# Taller: Configuración de un flujo CI/CD para una app Node.js + TypeScript + Vitest (GitHub Actions)

Este taller te deja una app **lista** para correr localmente, subir a GitHub y ver **GitHub Actions (CI)** ejecutándose. 
Además incluye un flujo opcional de **CD con Docker** hacia GitHub Container Registry (GHCR).

## Requisitos
- Node.js 18+ (recomendado 20 LTS): `node -v`
- Git instalado: `git --version`
- Cuenta de GitHub

## 1) Instalar dependencias
```bash
npm install
```

## 2) Correr en local (desarrollo)
```bash
npm run dev
```
Abre: http://localhost:3000/health

## 3) Probar (Vitest)
```bash
npm test
```

## 4) Compilar y ejecutar build
```bash
npm run build
npm start
```
Abre: http://localhost:3000/health

---

## 5) Preparar Git y subir a GitHub (CI automático)
1. Crea un repositorio vacío en GitHub (público o privado).
2. En tu proyecto (esta carpeta), ejecuta:

```bash
git init
git add .
git commit -m "feat: proyecto base CI/CD con Node+TS+Vitest"
git branch -M main
git remote add origin https://github.com/<TU_USUARIO>/<TU_REPO>.git
git push -u origin main
```

> Al hacer **push** a `main`, GitHub Actions (workflow `ci.yml`) correrá **instalación, build y tests** con cache de dependencias. 
> Para ver el pipeline: pestaña **Actions** del repo.

---

## 6) ¿Qué hace el CI?
Archivo: `.github/workflows/ci.yml`
- Dispara en `push` y `pull_request` a cualquier rama.
- Usa Node 18 y 20 (matriz).
- Cache de npm.
- Instala, compila y ejecuta pruebas.
- Publica artefacto (zip del build) en cada ejecución.

---

## 7) CD opcional: Docker a GHCR (GitHub Container Registry)
Archivo: `.github/workflows/cd-ghcr.yml` (corre en etiquetas tipo `v*` p.ej. `v1.0.0`)
- Construye imagen Docker y la publica en GHCR: `ghcr.io/<TU_USUARIO>/<TU_REPO>:<tag>`

### Configuración previa
1. En GitHub > Settings > **Actions** > General: habilita permisos para **Read and write**.
2. Agrega `secrets` del repo (Settings > Secrets and variables > Actions > New repository secret):
   - `GHCR_USERNAME` = tu usuario de GitHub
   - `GHCR_TOKEN` = un **Personal Access Token (classic)** con scope `write:packages` y `read:packages`
3. Crea una **release/tag**:
```bash
git tag v1.0.0
git push origin v1.0.0
```
La acción `cd-ghcr.yml` correrá y subirá la imagen.

---

## 8) Comandos útiles (Windows PowerShell)
```powershell
# Ver ramas remotas
git fetch --all
git branch -a

# Crear nueva rama y subirla
git checkout -b feature/mi-cambio
git push -u origin feature/mi-cambio

# Traer cambios de main
git checkout main
git pull origin main
```

---

## 9) Estructura del proyecto
```
.
├─ .github/
│  └─ workflows/
│     ├─ ci.yml
│     └─ cd-ghcr.yml   # (opcional)
├─ src/
│  ├─ routes/
│  │  └─ health.ts
│  ├─ utils/
│  │  └─ sum.ts
│  └─ index.ts
├─ test/
│  ├─ health.test.ts
│  └─ sum.test.ts
├─ .gitignore
├─ .dockerignore
├─ Dockerfile
├─ package.json
├─ tsconfig.json
├─ vitest.config.ts
├─ .eslintrc.cjs
├─ .prettierrc
└─ README.md
```

¡Listo! Con esto tienes CI al subir a GitHub y CD opcional a GHCR. Si quieres desplegar a un PaaS (Render, Railway, Fly.io, etc.) te ayudo a crear el flujo específico.
