# 🌱 CodePlants - Panel de Adminitración (FrontEnd) BootCamp CodeSpace 🚀 
Este es el **FrontEnd** del proyecto **CodePlants**, un panel de adminitración web para gestionar
usuarios en una plataforma temática de viveros. El sistema incluye gestión de usuarios, control de accesos
y visualización personalizada para administradores y usuarios normales.

---   

## 🧩 Tecnologías usadas   

[![My Skills](https://skillicons.dev/icons?i=html,css,js,git,github,vscode)](https://skillicons.dev)   

---   

## 📋 Funcionalidades  

### 🔐 Página de Login
- Autenticación mediante email y contraseña   
- Acceso al panel según el rol (admin o user)   
- Enlace directo a la pagían de registro de nuevo usuario (default: user)   

### 📝 Página de Registro
- Formulario de creación de cuenta   
- Validación de campos requeridos      
- Almacenamiento de nuevos usuarios en la base de datos

### 🧑 Página de Usuario Normal   
- Visualización de datos personales
- Imagén de perfil y posibilidad de modificarla(ext: png)   
- Listado de artículos favoritos (plantas, herramientas, accesorios y productos)

### 🛠️ Panel de Administración     
- Listado completo de usuarios registrados
- Acciones por usuario listado:
   - ✏️ **Modificar** sus datos: Visualización y modificación de campos seleccionados a través de modal.
   - ❌ **Eliminar** el usuario, con modal de verificación.   
   - 🚫 **Desactivar** cuenta de usuario, con modal de verificación.  
   [ Estás dos últimas opciones se desabilitan para el usuario actualmente logeado como administrador]   

---   

## 🔧 Requisitos   

Este frontend  **consume un backend** que debe estar disponible y en ejecución en
http://localhost:3000, y con MongoDb operativo,además de tener instalado npm.

---   

## 🚀 Como ejecutar   

1. Clona este repositorio
2. Realiza la instalación de las dependencias con "npm i"
3. Ejecutalo con el comando "npm run dev"
4. Ejecútalo en : http://localhost:5173/

 

---
<a id="estructura-del-repositorio"></a>
## Estructura del Repositorio 📂 
Este repositorio está organizado de la siguiente manera:  

```CODESPACE_ADMINPANEL_FRONTEND
📦 dist 
📦 public
📦 src 
├── 📁 api              # Configuración, llamadas y conexiones a la api
├── 📁 complements      # Modelos y métodos usados en el proyecto
├── 📁 events           # Eventos para las acciones de la web
├── 📁 imgs             # Imágenes usadas en el proyecto
├── 📁 pages            # Archivos de las páginas del proyecto
├── 📁 scss             # Configuración visual de estilos
├── 📁 utils            # Configuraciones utiles para el proyecto
├── .gitignore           # Exclusiones del control de versiones
├── .index.html          # Página base del proyecto en SPA
├── package.json         # Configuración del proyecto y dependencias  
├── README.md            # Este archivo
```
