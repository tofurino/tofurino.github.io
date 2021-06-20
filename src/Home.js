import Header from './components/Header.js';
import './Home.css';

function home() {
  	return (
    	<div className="home">

      		<div className="body">

				<div className="banner">Installation guides</div>

				<div className="guides-list">
					<div className="guide-card">
						<div className="guide-card-title">MultiMC setup</div>
						<div className="guide-card-description">The free, open source Minecraft (java edition) launcher that will be used for all modpack installations unless otherwise stated.</div>
						<div className="guide-card-tags">MC version: all | Modding API: NIL</div>
					</div>

					<div className="guide-card">
						<div className="guide-card-title">FTB Endeavour</div>
						<div className="guide-card-description">FTB's general all-purpose modpack for Minecraft 1.16</div>
						<div className="guide-card-tags">MC version: 1.16.5 | Modding API: Forge</div>
					</div>

					<div className="guide-card">
						<div className="guide-card-title">All The Mods 6</div>
						<div className="guide-card-description">A HUGE modpack for Minecraft 1.16.5</div>
						<div className="guide-card-tags">MC version: 1.16.5 | Modding API: Forge</div>
					</div>

					<div className="guide-card">
						<div className="guide-card-title">Better Minecraft [Fabric] 1.17</div>
						<div className="guide-card-description">Minecraft, but better!</div>
						<br />
						<div className="guide-card-description">Take note that Minecraft 1.17 is still very new. Other than some new biomes and some QOL mods, this modpack is still very new.</div>
						<div className="guide-card-tags">MC version: 1.17 | Modding API: Fabric</div>
					</div>
				</div>
				
      		</div>
    	</div>
  	);
}

export default home;
