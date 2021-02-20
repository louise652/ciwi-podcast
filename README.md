# Overview
This is a script which will find any new videos of [Ciwi's Podcast](https://www.youtube.com/channel/UCchHlGybrBFkP6qVxeaKMyg/videos?&ab_channel=CiaranMcCloy) from Youtube and download the audio track. Tracks will then be stored in the repo to be referenced by the [Wordpress site](https://ciwiswebsite.wordpress.com/). This augments the RSS feed used to publish the podcast on Spotify.

# Original Script
This script has been adapted for personal purposes. The more generalised original verion is located [here](https://github.com/bardisty/ytdlrc).

# Prerequisites
Install [youtube-dl](https://github.com/ytdl-org/youtube-dl)

Ensure that your git repo is configured correctly as the script will pull, commit and push any chnages.
# Running the script

## Automatic(not yet implemented)
The script will run daily at 1pm on a cron job to check for any new podcasts. If any are found, they will be pushed up to the repo and an alert will fire to update the Wordpress site so Spotify can get the new episode. See [here](https://ole.michelsen.dk/blog/schedule-jobs-with-crontab-on-mac-osx/) for more info on setting up a cron job.

## Manual
Navigate to the directory of the getaudio script. Open a terminal window and type ./getaudio.


After the script has finished, any new episodes of Ciwi's Podcast will be downloaded as audio to the new directory. They will be added to an archive list so they will not be re-downloaded. Theyy will be pushed up to the repo automatically as per local git setup.

# Configuration
To change the youtube source, amend the url in the get.list file

# Add audio file to the Wordpress RSS feed
Once the audio files are in the repo, they can be added to the website as a post.
Login in to the wordpress site and go into the settings. Click Posts on the left hand side and 'Add a new post'

![Step 1](images/Screenshot1.jpg)

Add the Episode title in the format 'Episode XX- Title of Episode'. Then below the title click /audio and select the audio dropdown option.

![Step 2](images/Screenshot2.jpg)

On the right pane, click on Post for the settings. Select the author. Select Podcast as the category (or it will NOT publish to Spotify). Write a brief excerpt describing the podcast episode.

![Step 3](images/Screenshot3.jpg)

Finally, click on insert from url and enter the url of the audio file, located on Github. In the repo, locate the audio file, right click the View Raw link and copy the link address- this will be what you need.

![Step 4](images/Screenshot4.jpg)

Publish and save all the changes and Spotify should pick up the new episode :)


