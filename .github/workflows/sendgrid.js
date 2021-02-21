#! /usr/bin/env node

const sgMail = require("@sendgrid/mail");
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const msg = {
  to: "lmccloy652@gmail.com",
  from: "lmccloy652@gmail.com",
  subject: "Follow these steps to upload to Spotify...",
  html: "<p>Follow the steps below to add a new podcast to the website. Spotify can then pick this up and add it.</p>
<ol>
<li>Go to <a href="https://github.com/louise652/ciwi-podcast/tree/master/new/Ciaran_McCloy_-_Videos">https://github.com/louise652/ciwi-podcast/tree/master/new/Ciaran_McCloy_-_Videos</a>. This is a list of all podcasts. We are looking for the most recent file, uploaded in the last 24 hours.
Click into the most recent audio file, right click the View Raw link and copy the link address- this will be what you need.</li>
</ol>
<p><img src="../../images/Screenshot1.png" alt="Step 1"></p>
<ol>
<li>Log in to the wordpress admin site and go into the settings. Click Posts on the left hand side and &#39;Add a new post&#39;</li>
</ol>
<p><img src="../../images/Screenshot2.png" alt="Step 2"></p>
<ol>
<li>Add the Episode title in the format &#39;Episode XX- Title of Episode&#39;. Then below the title type /audio and select the audio dropdown option.</li>
</ol>
<p><img src="../../images/Screenshot3.png" alt="Step 3"></p>
<ol>
<li>On the right pane, click on the settings cog then Post. Select the author. Select Podcast as the category (or it will NOT publish to Spotify). Write a brief excerpt describing the podcast episode.</li>
</ol>
<p><img src="../../images/Screenshot4.png" alt="Step 4"></p>
<ol>
<li>Click on insert from url and enter the url of the audio file from Step 1.</li>
</ol>
<p><img src="../../images/Screenshot5.png" alt="Step 5"></p>
<ol>
<li>Finally, publish and save all the changes and Spotify should pick up the new episode :)</li>
</ol>
<p><img src="../../images/Screenshot6.png" alt="Step 6"></p>
",
};

sgMail
  .send(msg)
  .then(() => console.log("Mail sent successfully"))
  .catch((error) => console.error(error.toString()));
