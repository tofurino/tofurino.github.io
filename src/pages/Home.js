import './Home.css';

function Home() {
  	return (
    	<div className="home">
      		<div className="body">

				<div className="banner">Installation guides</div>

				<div className="guides-list">
					<div className="guide-card">
						<a href="/MultiMC">
							<div className="guide-card-title">MultiMC setup</div>
						</a>
						<div className="guide-card-description">The free, open source Minecraft (java edition) launcher that will be used for all modpack installations unless otherwise stated.</div>
						<div className="guide-card-tags">MC version: all | Modding API: NIL</div>
					</div>

					<div className="guide-card">
						<a href="/FTB">	
							<div className="guide-card-title">FTB / FTB Endeavour</div>
						</a>
						<div className="guide-card-description">A guide for downloading FTB modpacks, using FTB's general all-purpose modpack for Minecraft 1.16, FTB Endeavour, as an example.</div>
						<div className="guide-card-tags">MC version: 1.16.5 | Modding API: Forge (applies to FTB Endeavour only)</div>
					</div>

					<div className="guide-card">
						<a href="/CurseForge">
							<div className="guide-card-title">CurseForge / zip / All The Mods 6</div>
						</a>
						<div className="guide-card-description">A guide for downloading CurseForge or zip modpacks, using ATM 6, a HUGE modpack for Minecraft 1.16.5</div> as an example.
						<div className="guide-card-tags">MC version: 1.16.5 | Modding API: Forge (applies to ATM 6 only)</div>
					</div>

					<div className="guide-card">
						<a href="/1.17">	
							<div className="guide-card-title">1.17 / Better Minecraft [Fabric] 1.17</div>
						</a>
						<div className="guide-card-description">A guide for playing Minecraft 1.17, or any modpack that uses Minecraft 1.17, using Better Minecraft, Fabric 1.17 version. Minecraft, but better!</div>
						<br />
						<div className="guide-card-description">Take note that Minecraft 1.17 is still very new. Other than some new biomes and some QOL mods, this modpack is still very new.</div>
						<div className="guide-card-tags">MC version: 1.17 | Modding API: Fabric (applies to Better Minecraft 1.17 Fabric version only)</div>
					</div>
				</div>
				
      		</div>
    	</div>
  	);
}

export default Home;
