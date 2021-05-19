---
title: "Sample Content"
description: "This description will be read by search engine to find this page"
keywords:
    - data science
    - computer science
lead: "This page contains various markdown examples"
date: 2020-10-06T08:48:57+00:00
lastmod: 2021-05-18T12:18:57+00:00
draft: false
images: []
menu:
  docs:
    parent: "cs"
contributors:
  - Soichi Hayashi
  - Frances E. Allen
  - Andra Ferrara
weight: 100
toc: true
plotly: true
quiz:
    question: What is the best way to embed an interactive graphs/plots on your page?
    answer: Create and store plotlyjs json under /static directory, and embed it using plotly shortcode.
    wrong:
      - Create and host the plot outside of this site and simply link to your page.
      - Write and embed javascript code inside your markdown document.
      - Create a google spreadsheet with an exported chart and embed the graph on your page.
      - Write a python code using matplotlib and include it in your markdown and this site will automatically generate the graph for your page.
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

```
{{</* plotly json="plotly/sample.json" height="400px"*/>}}
```
> Please make the URL relative to `static` directory (without `/` at the front)

Becomes..

{{<plotly json="plotly/sample.json" height="400px">}}

This requires several steps..

1. First you need to export your vis content in plotly json format (please google search!). 

2. Then, you store the json file under static/plotly directory.

3. You have to load "plotly.js" for your page by adding the following front matter content

```
plotly: true
```

4. Lastly, you can insert the plotly shortcode like this 


```
{{</* plotly json="plotly/sample.json" height="400px" */>}}
```


## Citation

You can add citation by doing the following. I think.

1. Add the paper you are citing in `data/citations.yml` of this repo in yml formatted bibtex. If you have bibtex file, you can use `pandoc-citeproc --bib2yaml` command to conver it to this format.

The citation entry should look like this

```
- id: Lessig 2002
  type: article-journal
  author:
  - family: Freely
    given: I.P.
  issued:
  - year: 1997
  title: A small paper
  container-title: The journal of small papers
  volume: '5'
  note: to appear

```

2. Add the citation on your page by adding the following shortcode using the `id` you used for citations.yml as the key.

```
> Here is my citation {{</* cite "Lessig 2002" */>}}.
```

It would appear like the following..

> Here is my citation{{< cite "Lessig 2002" >}}

3. To show all the references cited in your page, add the following shortcode where you want to show the references.

```
{{</* bibliography */>}}
```

This will add all the papers that you have cited in your page. Like this..

### References

{{< bibliography >}}


