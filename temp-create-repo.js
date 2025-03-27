#!/usr/bin/env node
// Script para crear automáticamente un repositorio GitHub para StoryCanvas

import fs from 'fs/promises';
import path from 'path';
import os from 'os';
import fetch from 'node-fetch';

// Configuración
const CLAUDE_CONFIG_PATH = path.join(os.homedir(), '.claude.json');
const GITHUB_API_URL = 'https://api.github.com';
const REPO_NAME = 'StoryCanvas-Beta';
const REPO_DESCRIPTION = 'Plataforma de cómics educativos con IA - Versión Beta';
const IS_PRIVATE = false;

// Cargar la configuración de Claude para obtener el token
async function loadToken() {
  try {
    const data = await fs.readFile(CLAUDE_CONFIG_PATH, 'utf8');
    const config = JSON.parse(data);
    
    // Buscar el servidor MCP de GitHub
    const githubServer = config.mcp?.servers?.find(server => 
      server.name === "GitHub MCP" || server.name.toLowerCase().includes('github')
    );
    
    if (!githubServer || !githubServer.token) {
      console.error('No se encontró un token de GitHub en la configuración de Claude.');
      process.exit(1);
    }
    
    return githubServer.token;
  } catch (error) {
    console.error(`Error al leer el archivo de configuración: ${error.message}`);
    process.exit(1);
  }
}

// Crear un repositorio en GitHub
async function createRepository(token, repoName, isPrivate, description) {
  const url = `${GITHUB_API_URL}/user/repos`;
  
  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Accept': 'application/vnd.github+json',
        'Authorization': `token ${token}`,
        'X-GitHub-Api-Version': '2022-11-28',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: repoName,
        description: description,
        private: isPrivate,
        auto_init: false // No inicializar con README
      })
    });
    
    const data = await response.json();
    
    if (!response.ok) {
      throw new Error(`Error al crear repositorio: ${data.message || 'Error desconocido'}`);
    }
    
    return data;
  } catch (error) {
    console.error(`Error en la solicitud a la API: ${error.message}`);
    throw error;
  }
}

// Función principal
async function main() {
  console.log('=== Creador Automático de Repositorio para StoryCanvas ===\n');
  
  try {
    // Cargar el token
    console.log('Cargando token de GitHub desde la configuración de Claude...');
    const token = await loadToken();
    console.log('Token cargado correctamente.\n');
    
    // Crear el repositorio
    console.log(`Creando repositorio "${REPO_NAME}"...`);
    const repo = await createRepository(token, REPO_NAME, IS_PRIVATE, REPO_DESCRIPTION);
    
    console.log('\n✅ Repositorio creado correctamente:');
    console.log(`- Nombre: ${repo.name}`);
    console.log(`- Descripción: ${repo.description || 'Sin descripción'}`);
    console.log(`- Privado: ${repo.private ? 'Sí' : 'No'}`);
    console.log(`- URL: ${repo.html_url}`);
    console.log(`- Clone URL: ${repo.clone_url}`);
    
    // Guardar la información en un archivo para referencia
    await fs.writeFile('repo-info.json', JSON.stringify(repo, null, 2));
    console.log('\nInformación del repositorio guardada en repo-info.json');
    
  } catch (error) {
    console.error(`\n❌ Error: ${error.message}`);
  }
}

// Ejecutar la función principal
main();
