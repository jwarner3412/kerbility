---
layout: post
title:  "Land your booster... And get to orbit!"
date:   2016-04-20 01:29:53 -0400
categories: kos
published: false
---
Here marks my first KOS post: How to land your Falcon9 booster and complete your
main objective.

Theres two common ways to do this:
1. With the long dead "NeverUnload" mod (so not really an option anymore), or
2. With the FRMS mod.

FRMS is a great solution. The only drawback is, you are only flying 1 craft at a
time. The mod saves all the craft states at seperation and focus change, and
when your done with all your stages it stitches the many saves together. I want
to land 2 Falcon9 cores from a heavy and watch as the center core flys in 30-45
seconds after, all while monitoring main mission progress in map view.

We're going to learn a third way:
KOS Kuniverse 4th wall awesomeness.

What we can do with KOS is set the load/unload and pack/unpack settings in the
same way that the NeverUnload mod did on older versions.

**WARNING**
Setting load/pack settings through KOS will change the values in KSP's config
file... permanently. They dont revert back after game restart. You must record
your original values and have a way to revert after your mission is complete.

Leaving load/pack settings in their extended values will induce some odd
behaviors. The long "solved" launch clamp bug will return when the game is no
longer allowed to delete it from the save file. The clamp will follow you all
the way to space and has a 95% chance to smash your booster stage. Not fun.

Luckily I solved this problem for you.
**WARNING**

Before playing around with these settings, we need a way to revert back to
default. Some background first:

We have 7 "flight conditions" with associated "pack/unpack", "load/unload",
settings for each. These flight conditions are: "flying", "landed", "splashed",
"prelaunch", "orbit", "suborbital".

You my have accessed these built-in KOS variables already in your flight scripts
(if vessel spashed or landed kill the engines, OR if vessel in prelaunch start
  program with countdown - this is usefull for reboot-proof programs more on that
  later).

Accessing and "4th wall" settings through KOS are invoked with the "kuniverse"
object. What we're concerned with is the "DefaultLoadDistance", this will handle
all 7 flight conditions, and their 4 settings for each.

Syntax for accessing these settings is as follows:

<pre>
set kuniverse:defaultLoadDistance:flightCondition:setting to value.
</pre>

Where condition would be "flying" or "landed" etc, setting would be "pack",
"unload", etc, value would be the distance in meters.

Now that we have the background information, onto making our return to default
settings program. In KOS you can log strings to new files with the
<code>log "[content]" to [file].ks.</code> command. Using this method, we can make a
query and log the results to another file. That would be done like so:

<pre>
log "set kuniverse:defaultLoadDistance:flying:unload to " + kuniverse:defaultLoadDistance:flying:unload + "." to kun.ks.
log "SET KUNIVERSE:DEFAULTLOADDISTANCE:FLYING:LOAD TO " + KUNIVERSE:DEFAULTLOADDISTANCE:FLYING:LOAD + "." to kun.ks.
log "wait 0.0001." to kun.ks.
WAIT 0.001.

log "SET KUNIVERSE:DEFAULTLOADDISTANCE:FLYING:PACK TO "+KUNIVERSE:DEFAULTLOADDISTANCE:FLYING:PACK+"." to kun.ks.
log "SET KUNIVERSE:DEFAULTLOADDISTANCE:FLYING:UNPACK TO "+KUNIVERSE:DEFAULTLOADDISTANCE:FLYING:UNPACK+"." to kun.ks.
log "wait 0.0001." to kun.ks.
WAIT 0.001.
</pre>
