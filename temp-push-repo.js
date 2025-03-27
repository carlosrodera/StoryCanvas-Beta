#!/usr/bin/env node
// Script para empujar automáticamente el repositorio StoryCanvas a GitHub

import { exec } from 'child_process';
import { promisify } from 'util';
import fs from 'fs/promises';
import path from 'path';
import os from 'os';

const execPromise = promisify(exec);

// Configuración
const CLAUDE_CONFIG_PATH = path.join(os.homedir(), '.claude.json');
const REPO_PATH = '/Users/carlosrodera/AppCoding/StoryCanvas';
const REMOTE_URL = 'https://github.com/carlosrodera/StoryCanvas-Beta.git';

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

async function runCommand(command) {
  console.log(`Ejecutando: ${command}`);
  
  try {
    const { stdout, stderr } = await execPromise(command, { cwd: REPO_PATH });
    
    if (stderr && !stderr.includes('hint:') && !stderr.includes('warning:')) {
      console.error(`Error: ${stderr}`);
    }
    
    return stdout.trim();
  } catch (error) {
    console.error(`Error al ejecutar comando: ${error.message}`);
    throw error;
  }
}

// Función principal
async function main() {
  console.log('=== Subiendo StoryCanvas a GitHub ===\n');
  
  try {
    // Cargar el token
    console.log('Cargando token de GitHub...');
    const token = await loadToken();
    console.log('Token cargado correctamente.\n');
    
    // Añadir todos los archivos al stage
    await runCommand('git add .');
    console.log('Archivos añadidos al stage.\n');
    
    // Crear un commit inicial
    await runCommand('git commit -m "Versión beta inicial de StoryCanvas"');
    console.log('Commit creado.\n');
    
    // Configurar el remote origin si no existe
    try {
      await runCommand('git remote add origin ' + REMOTE_URL);
    } catch (error) {
      if (error.message.includes('already exists')) {
        console.log('Remote ya configurado. Actualizando URL...');
        await runCommand('git remote set-url origin ' + REMOTE_URL);
      } else {
        throw error;
      }
    }
    
    // Configurar autenticación con el token en la URL
    const tokenUrl = REMOTE_URL.replace('https://', `https://${token}@`);
    console.log('Autenticación configurada.\n');
    
    // Push al repositorio remoto
    console.log('Subiendo al repositorio remoto...');
    await runCommand(`git push -u origin HEAD:main`);
    
    console.log('\n✅ Repositorio subido correctamente a GitHub!');
    console.log('URL: https://github.com/carlosrodera/StoryCanvas-Beta');
    
  } catch (error) {
    console.error(`\n❌ Error: ${error.message}`);
  }
}

// Ejecutar la función principal
main();
