<script lang="ts">
  import Logo from "$lib/components/svg/Logo.svelte";
	import YoutubeIcon from "$lib/components/svg/YoutubeIcon.svelte";
	import GithubIcon from "$lib/components/svg/GithubIcon.svelte";
	import IconLink from "$lib/components/IconLink.svelte";
	import DarkmodeButton from "$lib/components/DarkmodeButton.svelte";
	import DiscordIcon from "./svg/DiscordIcon.svelte";
	import TwitchIcon from "./svg/TwitchIcon.svelte";
</script>
<header class="fixed z-10 top-0 inset-x-0 border-b bg-white dark:bg-dark-background dark:border-gray-800">
  <nav class="flex items-center justify-between max-w-5xl mx-auto px-4 h-24">
    <a href="/"><Logo class="w-28 h-28"/></a>
    <div class="flex space-x-1 items-center">
        <DarkmodeButton />


    <div class="flex space-x-1 items-center">
      <IconLink
         href="https://discord.gg/3Q7dtwrR"
         target="_blank"
      >
        <DiscordIcon class="w-8 h-8 fill-current" />
      </IconLink>
    </div>
    <div class="flex space-x-1 items-center">
      <IconLink 
         href="https://www.youtube.com/@devjonatas"
         target="_blank"
      >
        <YoutubeIcon class="w-8 h-8 fill-current" />
      </IconLink>
    <div class="flex space-x-1 items-center">
      <IconLink
         href="https://www.twitch.tv/devjonatas"
         target="_blank"
      >
        <TwitchIcon class="w-8 h-8 fill-current" />
      </IconLink>
    </div>
    <div class="flex space-x-1 items-center">
      <IconLink
         href="https://github.com/jonatasoli/"
         target="_blank"
      >
        <GithubIcon class="w-8 h-8 fill-current" />
      </IconLink>
    </div>
  </nav>
</header>
