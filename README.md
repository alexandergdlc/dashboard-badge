# Laboratorio 08 — Dashboard administrativo y Badge

Adaptación de TailAdmin Free React Tailwind Admin Dashboard (licencia MIT). Ver `UPSTREAM.md` para el repositorio y commit, `LICENSE.md` para su licencia y `README-TailAdmin.md` para la documentación original.

## Ejecutar en Windows

1. Extraer todo el ZIP. Abrir en VS Code la carpeta que contiene package.json.
2. Usar Node.js 24 y npm. En Terminal > Nueva terminal:

```powershell
node -v
npm -v
npm ci
npm run dev
```

3. Abrir la dirección Local de Vite (normalmente http://localhost:5173). La página inicial es el laboratorio; también está disponible en `/laboratorio-08` y en el menú lateral Laboratorio 08.
4. Mantener la terminal abierta. Detener con Ctrl+C. Otro día basta ejecutar npm run dev otra vez.
5. Si npm.ps1 está bloqueado, utilizar npm.cmd ci y npm.cmd run dev, o una terminal Command Prompt.

No es necesario ejecutar create-vite ni copiar archivos manualmente. La descarga de dependencias necesita internet; los pedidos y el gráfico de la página del laboratorio usan datos locales.

## Uso y capturas del informe

La página contiene las tarjetas con tres estados y sus cantidades, el área Prueba interactiva del Badge, la tabla y el gráfico. El código original de TailAdmin conserva otras páginas de demostración. El desafío se implementa en la página Laboratorio 08.

1. **Figura 1:** maximizar navegador y capturar la vista general del dashboard con las tarjetas Aprobado (3), Pendiente (2) y Rechazado (1). Alejar un poco el zoom si se necesita mostrar más contenido.
2. **Figura 2:** en Prueba interactiva pulsar success, escribir Pago confirmado y capturar el Badge verde junto al selector y el código visible.
3. **Figura 3:** pulsar warning, cambiar el texto a Pendiente de revisión y capturar el Badge ámbar.
4. **Figura 4:** pulsar danger, cambiar el texto a Pago rechazado y capturar el Badge rojizo.
5. **Figura 5:** bajar a Pedidos recientes, elegir Todos y capturar las seis filas con sus etiquetas. Probar después Aprobado (3), Pendiente (2) y Rechazado (1), y volver a Todos.
6. **Figura 6:** usar el control de tema de TailAdmin en el encabezado para activar el modo oscuro. Si ofrece Claro, Oscuro y Sistema, elegir Oscuro. Capturar los tres estados en tarjetas o tabla. La opción del sistema puede depender del tema de Windows.
7. **Figura 7:** volver al tema claro, F12 y Ctrl+Shift+M; elegir Responsive, ancho 390 y alto 844. Capturar el área del Badge o las tarjetas. Comprobar menú móvil y que la tabla se desplace dentro de su contenedor al bajar. Volver a Ctrl+Shift+M y cerrar F12.
8. **Figura 8:** en una segunda terminal ejecutar npm run build, npm run lint y npm test. Capturar la compilación y las cinco pruebas aprobadas. Puede usarse más de una imagen bajo la misma figura.

Usar Win+Shift+S. En Word insertar cada imagen entre el título y Nota de su figura, sin borrar estos textos. Usar ajuste En línea con el texto y ancho máximo 15 cm. El espacio vacío está reservado para la imagen: tras insertarla, seleccionar el párrafo de la imagen y fijar Espaciado después en 0 pt si queda una separación grande antes de la nota. Se puede eliminar el párrafo vacío sobrante.

## Verificar

```powershell
npm run build
npm run lint
npm test
```

Build termina correctamente; puede advertir sobre el tamaño del JS por las páginas y librerías de la plantilla. Lint termina con advertencias existentes en la base, sin errores bloqueantes; los archivos nuevos del laboratorio no aparecen en esas advertencias. Vitest ejecuta cinco pruebas del renderizado estático y los datos. La comprobación en navegador y las capturas se completan localmente; no se afirma haber realizado una auditoría de accesibilidad ni una medición de rendimiento.

## Archivos del desafío

- `src/components/ui/lab-badge-variants.ts`: BadgeVariant y clases completas con cva.
- `src/components/ui/lab-badge.tsx`: componente Badge, props y elemento span.
- `src/pages/main/laboratorio-08/index.tsx`: área interactiva, tarjetas, tabla y gráfico.
- `src/pages/main/laboratorio-08/data.ts`: datos de demostración.
- `tests/lab-badge.test.tsx`: cinco pruebas con Vitest.
- `src/App.tsx`: rutas de la página inicial y `/laboratorio-08`.
- `src/components/layout/app-layout/sidebar/data.tsx`: acceso en el menú.
- `src/messages/*.json`: textos académicos en español.

Ejemplo:

```tsx
import { Badge } from '@/components/ui/lab-badge';

<Badge variant="success">Aprobado</Badge>
<Badge variant="warning">Pendiente</Badge>
<Badge variant="danger">Rechazado</Badge>
```

El Badge original de TailAdmin tiene otro contrato y se conserva para sus páginas; el del desafío se importa desde lab-badge. Las props de esta versión exigen exactamente las tres variantes solicitadas. El componente no guarda variant en su estado interno; los botones del padre lo actualizan. Los datos externos necesitarían validación antes de usarse.

## GitHub

No se ha publicado esta adaptación en tu cuenta. Puedes ejecutar y capturar desde el ZIP antes de crear el repositorio.

Crear en https://github.com/new un repositorio vacío `dashboard-badge-lab08`, sin README, licencia ni .gitignore automáticos. Desde la carpeta extraída:

```powershell
git init
git add .
git commit -m "Implementa dashboard y Badge del laboratorio 08"
git branch -M main
git remote add origin https://github.com/alexandergdlc/dashboard-badge-lab08.git
git push -u origin main
```

Si origin ya existe, corregirlo con:

```powershell
git remote set-url origin https://github.com/alexandergdlc/dashboard-badge-lab08.git
```

En otra computadora, después de publicarlo:

```powershell
git clone https://github.com/alexandergdlc/dashboard-badge-lab08.git
cd dashboard-badge-lab08
npm ci
npm run dev
```

Para recibir futuras actualizaciones en ese clon, primero revisar `git status`, guardar y confirmar cambios propios y luego `git pull`. El ZIP no incluye .git, node_modules ni dist. Mantener LICENSE.md y UPSTREAM.md.
