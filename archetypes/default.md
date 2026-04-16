---
title: "{{ replace .File.ContentBaseName "-" " " | title }}"
date: {{ .Date }}
draft: true
---

Tu poesía aquí.

Puedes usar múltiples estrofas
separadas por líneas en blanco.

Otra estrofa aquí
con más versos.

{{< m-izq "2" >}}
Texto con margen izquierdo de 2em
si necesitas indentación especial.
{{< /m-izq >}}

Más contenido después del shortcode.
