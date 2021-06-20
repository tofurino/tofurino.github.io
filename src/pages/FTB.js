import './guide.css';
import FTBInstance from '../assets/FTB/FTBInstance.png';

function FTB() {
    return(
        <div className="page">
            <div className="body">
                <div className="banner">FTB / FTB Endeavour</div>

                <div className="content">
                    <div id="1" className="step">Step 1: Downloading MultiMC</div>
                    <div>This guide is for installing FTB modpacks using MultiMC.</div>
                    <br />  
                    <div>View <a href="/MultiMC">this guide</a> if you do not have MultiMC installed.</div>

                    <div id="2" className="step">Step 2: Add Instance</div>
                    <div>Click on the 'Add Instance' button on the top left of the window</div>
                    <br />
                    <div>Search for your modpack under the FTB tab, select the version, and click OK.</div>
                    <img className="image" src={FTBInstance} />

                    <div id="3" className="step">Step 3: Modpack setup</div>
                    <div>MultiMC will take a while to download the required files for the modpack, give it a moment</div>
                    <br />
                    <div>Once the instance is ready, double click it to play. It'll take a while for the Forge Mod Loader to set everything up. Yes it'll take quite a while. Yes. You have to wait this much every time you start the instance up. </div>
                </div>
            </div>
        </div>
    )
}

export default FTB;