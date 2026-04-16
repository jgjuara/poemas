---
title: "{{ replace .File.ContentBaseName "-" " " | title }}"
date: {{ .Date }}
draft: true
---

Párrafo de la nota. Escribe aquí el cuerpo del texto.

Segundo párrafo si lo necesitas.

{{< m-izq "2" >}}
Cita o bloque con margen izquierdo opcional.
{{< /m-izq >}}

Más contenido después.
