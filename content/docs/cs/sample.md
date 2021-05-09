---
title: "Sample Content"
description: "This description will be read by search engine to find this page"
lead: "This page contains various markdown example"
date: 2020-10-06T08:48:57+00:00
lastmod: 2020-10-06T08:48:57+00:00
draft: false
images: []
menu:
  docs:
    parent: "cs"
contributors:
  - Soichi Hayashi
  - Frances E. Allen
weight: 100
toc: true
plotly: true
---

## Contributors 

As you see on above, if you'd like to list the contributors(authors) of this page, just add something like this to the "front matter".

```
contributors:
  - Soichi Hayashi
  - Frances E. Allen
```

If you'd like.. you can add a custom profile page for each contributors. See `/content/contributors/soichi-hayashi` directory and create something similar for each contributor.

## Images

To embed an image on a page, first you will need to add your image under `/static/images` directory, then add something like the following.

```
![sample image](/images/sample.gif)
```

This is how it might look..

![sample image](/images/sample.gif)

Although the image is stored inside /static directory, You don't need `/static/` in the image URL. That's how hugo does thing.

## Code highLight

You can insert code in the usual markdown format 

````
 ```langugage
 some code
 ```
````

So far, we've installed the following highLight langugages

* javascript
* json
* bash
* html
* ini
* toml
* yaml
* md (markdown)
* python
* r
* matlab

We can install a lot of other languages too, so just ask me.

Here is `bash` example

```bash
#!/bin/bash

###### CONFIG
ACCEPTED_HOSTS="/root/.hag_accepted.conf"
BE_VERBOSE=false

if [ "$UID" -ne 0 ]
then
 echo "Superuser rights required"
 exit 2
fi

genApacheConf(){
 echo -e "# Host ${HOME_DIR}$1/$2 :"
}

echo '"quoted"' | tr -d \" > text.txt
```

`javascript` example

```javascript
function $initHighlight(block, cls) {
  try {
    if (cls.search(/\bno\-highlight\b/) != -1)
      return process(block, true, 0x0F) +
             ` class="${cls}"`;
  } catch (e) {
    /* handle exception */
  }
  for (var i = 0 / 2; i < classes.length; i++) {
    if (checkCondition(classes[i]) === undefined)
      console.log('undefined');
  }

  return (
    <div>
      <web-component>{block}</web-component>
    </div>
  )
}

export  $initHighlight;
```

We can also pick different [highLight themes](https://highlightjs.org/static/demo/)

## Videos

You can embed video by hosting it on youtube (maybe we should create UTIL channel?) and embedding it with your hugo page using youtube shortcodes like this 

```
{{</* youtube HHqv2G0LmNc */>}}
```

> `"HHqv2G0LmNc"` is the Video ID from the youtube URL

becomes..

{{< youtube HHqv2G0LmNc >}}

You can do similar with vimeo..

## Katex

Use Katex syntax for math equations.

```
$$
\begin{equation*}
   n \sim  10^{18} \mathrm{cm^{-3}} \left(\frac{100\mathrm{km}}{R}\right)^2 \left(\frac{10\mathrm{MeV}}{\langle E \rangle}\right).
\end{equation*}
$$
```

Becomes..

$$
\begin{equation*}
   n \sim  10^{18} \mathrm{cm^{-3}} \left(\frac{100\mathrm{km}}{R}\right)^2 \left(\frac{10\mathrm{MeV}}{\langle E \rangle}\right).
\end{equation*}
$$

## Tweet

You can add twitter feed like this..

```
{{</* tweet 1390858968101232642*/>}}
```

which becomes..

{{< tweet 1390858968101232642 >}}

## Gist

If you want to host a code snippet on gist, you can include it here like this.

```
{{</* gist spf13 7896402 */>}}
```

Becomes

{{< gist spf13 7896402 >}}

## Plotly

You can embed [plotly](https://plotly.com/) graph (you can interact with it!)

{{<plotly json="plotly/sample.json" height="400px">}}

> Please make the URL relative to `static` directory.

This requires several steps..

1. First you need to export your vis content in plotly json format (please google search!). 

2. Then, you store it under /static/plotly directory.

3. You have to load "plotly.js" for your page by adding the following front matter content

```
plotly: true
```

4. Lastly, you can insert the plotly shortcode like this 


```
{{</* plotly json="/plotly/sample.json" height="400px" */>}}
```


