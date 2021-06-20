import './guide.css';
import CurseForgeFiles from '../assets/CurseForge/CurseForgeFiles.png';
import CurseForgeDownload from '../assets/CurseForge/CurseForgeDownload.png';
import CurseForgeZip from '../assets/CurseForge/CurseForgeZip.png';
import CurseForgeInstance from '../assets/CurseForge/CurseForgeInstance.png';

function CurseForge() {
    let scrollTo = (id) => {
        var elmnt = document.getElementById(id);
		elmnt.scrollIntoView({ behavior: 'smooth', block: 'center'});
    }
    return(
        <div className="page">
            <div className="body">
                <div className="banner">CurseForge/ zip / ATM 6</div>

                <div className="content">
                    <div id="1" className="step">Step 1: Downloading MultiMC</div>
                    <div>This guide is for installing FTB modpacks using MultiMC.</div>
                    <br />  
                    <div>View <a href="/MultiMC">this guide</a> if you do not have MultiMC installed.</div>

                    <div className="jump" onClick={() => scrollTo('b2')}>Click here if you have downloaded the development version of MultiMC or are on the development update channel</div>

                    <div id="a2" className="step">Step 2: Downloading the modpack as a zip file</div>
                    <div>This applies to all modpacks that come in the form of a zip file, such as those downloaded from <a href="https://www.curseforge.com/">CurseForge</a>.</div>
                    <br />
                    <div>Head to the <a href="https://www.curseforge.com/minecraft/modpacks/all-the-mods-6">ATM 6</a> page (or any modpack of your choice) and click on the Files tab. The latest version should be at the top.</div>
                    <img className="image" src={CurseForgeFiles} />
                    <div>Click on the name of the file and it will redirect you to a different page whith the download button. Click on the white, download button.</div>
                    <img className="image" src={CurseForgeDownload} />

                    <div id="a3" className="step">Step 3: Importing as zip</div>
                    <div>Once the zip file has been downloaded, move it to a folder of your choice. There is no need to unzip it.</div>
                    <br />
                    <div>Start MultiMC, click on the 'Add Instance' button on the top left corner of the window and head over to the 'Import from zip' tab.</div>
                    <img className="image" src={CurseForgeZip} />
                    <div>Click on the 'browse' button and find the zip file you just downloaded, select it, and click OK.</div>

                    <div id="a4" className="step">Step 4: And now we wait</div>
                    <div>MultiMC will take a while to extract the files from the zip file provided and set the instance up.</div>
                    <br />
                    <div>Once the instance is ready, double click it to play. It'll take a while for the Forge Mod Loader to set everything up. Yes it'll take a very long while. Yes. You have to wait this much every time you want to play.</div>

                    <div className="divider" />

                    <div className="jump" onClick={() => scrollTo('a2')}>Click here if you have downloaded the stable version of MultiMC or are on the stable update channel</div>

                    <div id="b2" className="step">Step 2: Add Instance</div>
                    <div>Click on the 'Add Instance' button on the top left of the window</div>
                    <br />
                    <div>Search for your modpack under the CurseForge tab, select the version (the latest version should be selected by default), and click OK.</div>
                    <img className="image" src={CurseForgeInstance} />

                    <div id="3" className="step">Step 3: Yes. We wait.</div>
                    <div>MultiMC will take a while to download the required files for the modpack, give it a moment</div>
                    <br />
                    <div>Once the instance is ready, double click it to play. It'll take a while for the Forge Mod Loader to set the session up. Yes it'll take quite a while. Yes. You'll have to wait this much every time you start the instance. </div>
                </div>
            </div>
        </div>
    )
}

export default CurseForge;