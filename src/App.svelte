<script>
  import PackageInfo from "./PackageInfo.svelte";

  const pkg = {
    name: 'svelte',
    speed: 'blazing',
    version: '4',
    website: 'https://svelte.dev'
  }
</script>

<PackageInfo 
  name={pkg.name},
  speed={pkg.speed},
  website={pkg.website},
  version={pkg.version}
/>

<!--

  OU
  <PackageInfo {...pkg} /> (linha 13 a 16)

  Nesse caso, você usa a sintaxe de propagação de propriedades (spread props), é mais concisa e pode ser útil quando você tem muitas propriedades para passar.

-->