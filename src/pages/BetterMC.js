import './guide.css';
import PageBottomNavigation from '../components/PageBottomNavigation.js';
import BetterMCVanilla from '../assets/BetterMC/BetterMCVanilla.png';
import BetterMCSettings from '../assets/BetterMC/BetterMCSettings.png'; 

function BetterMC() {
    return(
        <div className="page">
            <div className="body">
                <div id="top" className="banner">1.17 / Better Minecraft Fabric Version</div>

                <div className="content">
                    <div id="1" className="step">Step 1: Downloading MultiMC</div>
                    <div>This guide is for installing FTB modpacks using MultiMC.</div>
                    <br />  
                    <div>View <a href="/MultiMC">this guide</a> if you do not have MultiMC installed.</div>

                    <div id="2" className="step">Step 2: Downloading Java 16</div>
                    <div>Minecraft 1.17 runs on Java 16, instead of the usual Java 8 that is used for all versions of Minecraft from 1.12 to 1.16.</div>
                    <br />
                    <div>Donwload JDK 16 from <a href="https://jdk.java.net/16/">here</a>. And unzip the zip file into a directory of your choice.</div>

                    <div id="3" className="step">Step 3: Adding the instance</div>
                    <div>Start MultiMC and click the 'Add Instance' button. If you're playing vanilla Minecraft, select 1.17 and let MultiMC do the setup for the instance.</div>
                    <img className="image" src={BetterMCVanilla} />
                    <div>If you're playing a modpack, follow <a href="/FTB" target="_blank">this guide</a> for FTB modpacks and <a href="/CurseForge" target="_blank">this guide</a> for CurseForge or zip modpacks, but do not start the instance yet.</div>

                    <div id="4" className="step">Step 4: Changing the Java installation used for the instance</div>
                    <div>Before starting the instance, there is a need to change the Java installation used for the 1.17 instance only.</div>
                    <br />
                    <div>If you have followed the <a href="/MultiMC">MultiMC setup guide</a>, the global setting would be configured to use Java 8. You should not change the global settings since your other instances will still use Java 8.</div>
                    <br />
                    <div>Click on the 1.17 instance that has just been set up once and click 'Edit Instance' on the right (same option can be found by right clicking on the instance).</div>
                    <br />
                    <div>Head to the 'Settings' tab and check the Java Installation box. Click the browse button and search for Javaw.exe in thefolder which you extracted JDK 16 into. Javaw.exe should be in found in the bin folder. </div>
                    <img className="image" src={BetterMCSettings} />
                    <div>Click 'Launch' on the bottom right of the window and it should start up using Java 16.</div>
                    <br />
                    <div>If you're playing Better Minecraft 1.17 Fabric version, have fun not waiting. Unlike the previous Forge modpacks, Fabric does not require long wait times:></div>
                </div>

                <PageBottomNavigation />
            </div>
        </div>
    )
}

export default BetterMC;