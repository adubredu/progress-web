# ProgressLab Website

The `gh-pages` branch contains the web page to be displayed. This page will appear [here](https://progresslab.github.io/progress-web/) and [here](http://progress.eecs.umich.edu/).

## HOW-TO

Members of the lab should regularly update their own information and publication info. Instructions below. Fork the repo, then make a pull request to the `gh-pages` branch to update your info.

### Lab Member Info

Edit the `people.html` file. If you are new to the lab, add a new entry with the template below. If you are a current member, you can update any information, following the template. The list should be maintained in the order: Faculty > Researchers / Post-Docs > PhD Students > Masters Students > Undergraduate Students (these are not in separate sections, but reflected in the order). Within each category, the list should be maintained in terms of seniority.

```html
<!-- [Comment with lab member name, for code organization only.] -->
<div class="col-3 col-6-medium col-12-small person">
    <section class="box">
        <div class="image featured"><img src="images/headshots/[IMG_NAME]" /></div>
        <header>
            <h3><a href="[PERSONAL WEBSITE ADDRESS]">[LAB MEMBER FULL NAME]</a></h3>
            <p>[ROLE], [DEPARTMENT]</p>
        </header>
    </section>
</div>
```

Fill out the sections in the square brackets only, don't edit anything outside those sections.

  * **Headshot**: You should add a *square* headshot named something helpful like `your_name.[png/jpg]` in the folder `images/headshots/`, and add the corresponding image name in the HTML above.
  * **Website**: You can include the link to your own website. If you don't have one, consider using the profile provided by your department, or your Google Scholar, LinkedIn, etc. If you have none of those, then you should probably make one. Or just put `"#"` to point back to the same page.
  * **Name**: You can use whichever name you prefer to be known as, but please use your full name.
  * **Role**: Please don't get creative with your role. Follow others' lead when possible (PhD Student / Candidate, Undergraduate Student, Research Scientist, etc), and try to put only one, dominant role, except for in special cases.
  * **Department**: The department / program you are officially enrolled in or employed by (ECE, CSE, MECH, Robotics, etc).

### Alumni

To update the information for you or another lab alumni, go to the list of alumni on the `people.html` page, under the list of current members. Add / change a list item within the current `<ul>[...]</ul>` tags, with the following template:
```html
<li><a href="[PERSONAL WEBSITE ADDRESS]">[NAME]</a>, now [POSITION] at [EMPLOYER].</li>
```
Fill out the sections in the square brackets only, don't edit anything outside those sections.

### Publications

When you publish a new paper, please add it to the Bibtex file, `bib/progress.bib`. Make sure the format of the Bibtex is correct. Use the pre-defined strings for conference and journal names. The entries will be automatically sorted by year. Within the year, the entries will be displayed in *reverse order* that they are listed in the file.

The corresponding HTML is generated using [`bibtex2html`](https://www.lri.fr/~filliatr/bibtex2html/), with the following script:

```bash
./scripts/gen_pubs
```

The following fields can be added to the Bibtex to create links associated with the publication entry:

* `url`: Link to the paper PDF.
* `webpage`: Link to the project webpage.
* `video`: Link to the video.
* `note`: Additional notes, like "Best paper award."

## Project Pages

You may host a project page by adding a folder to the `projects/` directory. There is a template you can copy for your convenience, which can be found in `projects/_template/index.html`. Copy this template to `projects/my-project/index.html` and populate your information. The link to the project page is then `projects/my-project` for relative links within this repository, or http://progress.eecs.umich.edu/projects/my-project on the web.

## Design Credits

Dopetrope by HTML5 UP
html5up.net | @ajlkn
Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)

A spiffy new blog/magazine style responsive site template with a flat/minimal
design aesthetic.

AJ
aj@lkn.io | @ajlkn

Credits:

    Icons:
        Font Awesome (fontawesome.io)

    Other:
        jQuery (jquery.com)
        Responsive Tools (github.com/ajlkn/responsive-tools)
