# Overview
This is a script which will find any new videos of [Ciwi's Podcast](https://www.youtube.com/channel/UCchHlGybrBFkP6qVxeaKMyg/videos?&ab_channel=CiaranMcCloy) from Youtube and download the audio track. Tracks will then be stored in the repo to be referenced by the [Wordpress site](https://ciwiswebsite.wordpress.com/). This augments the RSS feed used to publish the podcast on Spotify.

# Original Script
This script has been adapted for personal purposes. The more generalised original verion is located [here](https://github.com/bardisty/ytdlrc).

# Prerequisites
Install [youtube-dl](https://github.com/ytdl-org/youtube-dl)

Ensure that your git repo is configured correctly as the script will pull, commit and push any chnages.
# Running the script

## Automatic
The script will run daily at 1pm on a cron job to check for any new podcasts. If any are found, they will be pushed up to the repo. See [here](https://ole.michelsen.dk/blog/schedule-jobs-with-crontab-on-mac-osx/) for more info on setting up a cron job.

## Manual
Navigate to the directory of the getaudio script. Open a terminal window and type ./getaudio.

After the script has finished, any new episodes of Ciwi's Podcast will be downloaded as audio to the new directory. They will be added to an archive list so they will not be re-downloaded. Theyy will be pushed up to the repo automatically as per local git setup.
## Alerting
A [github action](https://docs.github.com/en/actions) has been set up to send an email whenever a push has occurred. This will email the relevant accounts with info on how to uplaod the audio file to Wordpress. The action is located in the repo [here] (https://github.com/louise652/ciwi-podcast/blob/master/.github/workflows/send-email.yml). This reads email addresses, username and password from configured github [secrets](https://docs.github.com/en/actions/reference/encrypted-secrets).
# Configuration
To change the youtube source, amend the url in the get.list file
