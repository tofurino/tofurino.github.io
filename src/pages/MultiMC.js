import './guide.css';
import MultiMCJava from '../assets/MultiMC/MultiMCJava.png';
import MultiMCJavaSettings from '../assets/MultiMC/MultiMCJavaSettings.png';
import MultiMCProfiles from '../assets/MultiMC/MultiMCProfiles.png';

function MultiMC() {
    return (
        <div className="page">
            <div className="body">
                <div className="banner">MultiMC Setup</div>

                <div className="content">
                    <div id="1" className="step">Step 1: Downloading MultiMC</div>
                    <div>Download MultiMC <a href="https://multimc.org/">here</a>.</div>
                    
                    <div id="2" className="step">Step 2: Unzip MultiMC</div>
                    <div>You'll get a zip folder. All you have to do is unzip it in a directory of your choice.</div>

                    <div id="3" className="step">Step 3: Quick setup</div>
                    <div>Double click on MultiMC.exe and follow the quick setup process.</div>
                    <br />
                    <div>If you already have Java 8 installed, skip over to step 5. There is no further installation required for the launcher. It's portable!</div>

                    <div id="4" className="step">Step 4: Installing Java</div>
                    <div>Java 8 is required for Minecraft to run. Download Java from <a href="https://www.java.com/en/download/">here</a> and run the installer.</div>
                    <br />
                    <div>Ensure that you're installing 64-bit Java 8.</div>

                    <div id="5" className="step">Step 5: Quick setup (continued)</div>
                    <div>MultiMC should be able to automatically detect javaw.exe. If you have multiple versions of Java installed, make sure to select Java 8.</div>
                    <img className="image" src={MultiMCJava} />
                    <div>If it is unable to detect javaw after installation, manual navigation to the directory folder will be required. Javaw.exe will likely be found in Program Files\Java\jre1.8.0_281\bin.</div>
                    <br />
                    <div>For memory allocation, depending on how much RAM is available on your system, feel free to assign more to the maximum memory allocation.</div>
                    <div>Modpacks usually require more RAM (>4096MB, check the modpack page for instructions), but make sure to leave enough RAM for your other processes as Minecraft will make full use of the memory allocated to it.</div>
                    <br />
                    <div>These settings can be changed globally (across all instances) or for individual instances under the Java tab.</div>
                    <img className="image" src={MultiMCJavaSettings} />

                    <div id="6" className="step">Step 6: Setting up your profile</div>
                    <div>Click on the button that says 'Profiles' in the top right of the launcher</div>
                    <img className="image" src={MultiMCProfiles} />
                    <div>Click on 'add' on the right of the window and enter your Minecraft/Mojang account credentials (Please take note that Microsoft accounts are not supported by MultiMC yet)</div>

                    <div id="7" className="step">Step 7: Setup complete!</div>
                    <div>Setup is now complete! To begin playing Minecraft, click on the 'Add Instance' button on the top left of the window, and select your version of Minecraft or a modpack of your choice</div>
                    <br />
                    <div>View the <a href="/">other guides</a> for help on installing modpacks.</div>
                </div>
            </div>
        </div>
    )
}

export default MultiMC;