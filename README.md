# KCP Interia

**Live website: https://chintankparikh.github.io**

KCP Interia is an interior design studio in Hyderabad, started by Chintan K Parikh in 2008. The team designs and builds homes, villas, hotels, offices and showrooms, and has completed more than 300 projects.

This repository holds the studio's website: five pages that introduce the studio, show its work and make it easy to get in touch.

---

## The site at a glance

| Page | File | What visitors find |
|---|---|---|
| Home | `index.html` | Who we are, why clients choose us, a client testimonial |
| About | `about.html` | The KCP Interia story, mission and vision, our values, Chintan K Parikh and the team |
| Work | `work.html` | Walkthrough videos and two photo galleries: Complete Spaces and Design Details |
| Services | `services.html` | What we design and build, and the five steps of how we work |
| Contact | `contact.html` | Phone, email, studio address, enquiry form, feedback form |

**Look:** brand blue `#025070`, light blue `#79c8dc`, green `#87c49b`, cream `#fbf6ec` and white, with the KCP house logo. Works on phones, tablets and computers.

**Motion:**
- A "sketch to reality" opening plays once per visit: the house logo draws itself and the name appears and leaves letter by letter. Visitors can skip it.
- Moving between pages, the logo's lamp switches off and back on.
- The Contact page opens through a pair of tall blue doors.
- Anyone whose device is set to reduce motion sees no animation.

## Files

```
index.html  about.html  work.html  services.html  contact.html
assets/css/style.css     colours, fonts, layout, animations
assets/js/site.js        animations, mobile menu, photo viewer, contact form
images/signature.png     KCP logo icon (top bar, footer, phone home screen)
images/signature.ico     KCP logo icon (browser tab)
images/Projects/...      project photos used in the Work galleries
Videos/                  walkthrough videos
```

Plain HTML, CSS and JavaScript, served by GitHub Pages. Nothing to install or build.

## Making changes

- **Text:** open the page file, change the sentence, save, and upload it to GitHub.
- **Colours:** change the values under `:root` at the top of `assets/css/style.css`; they apply everywhere.
- **Add a photo:** upload it to `images/Projects/completespaces/` or `images/Projects/designdetails/`, then in `work.html` copy one photo line in that gallery and change the file name and photo number. Photos of about 1600 px on the long side load fastest.
- **Show a hidden video:** videos 2, 3 and 5 are hidden. In `work.html`, under "Our Work in Motion", remove the `<!--` and `-->` around the one you want.
- **Animation speed:** edit the `TIMING` numbers at the top of `assets/js/site.js` (in milliseconds). To see the opening again while testing, open the site in a new tab or private window.
- **Contact form:** messages go to the studio's Google Apps Script (the form's `action` address in `contact.html`). The feedback button links to the studio's Google Form.

## Publishing an update

1. On github.com, open this repository and choose **Add file → Upload files**.
2. Drag in the changed files, keeping the same folder structure.
3. Click **Commit changes**. The live site updates within a minute or two (refresh with Cmd + Shift + R or Ctrl + F5 if needed).

## Contact

KCP Interia · 1-1-36/3, RTC X Road, Jawahar Nagar, Kavadiguda, Hyderabad 500 020
+91 98490 77702 · +91 81210 77702 · kcpinteria@gmail.com
