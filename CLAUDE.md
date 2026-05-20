@AGENTS.md

# Contrato de coordinación entre hilos

Al inicio de cada sesión, leer automáticamente el archivo de contrato en Oracle:

```
SSH: ubuntu@144.22.58.186
Clave: C:\Users\pc\.ssh\maria-oracle.key
Archivo: /opt/openclaw/INTERFACE.md
```

Comando de lectura:
```
ssh -i /c/Users/pc/.ssh/maria-oracle.key -o StrictHostKeyChecking=no -o BatchMode=yes ubuntu@144.22.58.186 "cat /opt/openclaw/INTERFACE.md"
```

Reglas:
- Leer INTERFACE.md antes de cualquier acción en este hilo.
- Si el usuario dice "actualicé INTERFACE.md" o similar, leerlo inmediatamente sin que lo pida explícitamente.
- Si este hilo hace un cambio que afecta session keys, endpoints, modelos o estructura de outputs, actualizar INTERFACE.md y registrarlo en su tabla de cambios.
