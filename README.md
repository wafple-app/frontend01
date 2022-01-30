# Wafple Frontend

# Prerequisite
- Motivation.
- Team work.

# [Setting up the development environment](https://reactnative.dev/docs/environment-setup)
1. You need to have Node.js on your development enviroment. If you don't have it, you can go to [Node.js](https://nodejs.org/en/) then download and install.

# IOS Simulator
> Detail guide in [Expo official guide](https://docs.expo.dev/workflow/ios-simulator/).

## Installation
1. Go to app store, search for xcode then download and install.  
  > This will take awhile depends on your machine power and speed of the internet.  
2. After installation, open the xcode, then open "Preferences".  
  ![image](https://user-images.githubusercontent.com/25420417/151321321-4ec0e89e-5ff6-4b56-8518-7abc6e0d5583.png). 
3. Under "Locations" tab, click "Command Line Tools" (dropdown menu) then make sure choose highest version.

## Running simulator
1. Go to our repository directory, run `expo start` command. 
  ![image](https://user-images.githubusercontent.com/25420417/151686802-092eab64-e036-4b8f-9e80-8cac22da836c.png)
2. If you are get same screen as the screenshot above, you can have two options to run the simulator.  
  2.1 Type 'i' in the command line wil start the IOS simulator.  
  2.2 Go to `http://localhost:19002` then you have more options of starting the simulator.

# Android Simulator
1. Go to [Android Studio Download](https://developer.android.com/studio) and select platform then download.
2. Start the installer then follow the steps.  
  2.1 Choose 'standard' type for your setup.  
    ![image](https://user-images.githubusercontent.com/25420417/151687477-3611f69a-94d0-4f4a-92dc-ee8ca7490a2a.png) 
  2.2 Accept all the lisence and click 'finish'.  
    ![image](https://user-images.githubusercontent.com/25420417/151688547-74a3a07c-fc83-4a69-8185-91efa1bf0405.png) 
3. Once the installation is completed, go to 'Preferences' -> 'Appearance & Behavior' -> 'System Settings' -> 'Android SDK' and make sure following SDKs downloaded.
  > If you choose 'standard' type, you should have it. If it doesn't go to the official website then click and download it.  

  ![image](https://user-images.githubusercontent.com/25420417/151688802-e7bc62fd-d811-4882-8981-c3aca018035a.png)  
  ![image](https://user-images.githubusercontent.com/25420417/151688862-53f87185-5b76-4980-b3c5-1ebdf15930a6.png)  
  
## For macOS
> If you are Window machine, you don't need to do this. This is an extra steps for macOS users to complete install Android Studio.  

- Go to [Step 1: Set up Android Studio's tools](https://docs.expo.dev/workflow/android-studio-emulator/#step-1-set-up-android-studios-tools) then follow steps. If you followed the above steps, you can skip to 'add environment variable' part.
 
> Following steps is based on my machine. It is 2021 MacBook Pro M1 Pro.
1. I copied and pasted the below two lines of code on the terminal.  
    ```
    [ -d "$HOME/Library/Android/sdk" ] && ANDROID_SDK=$HOME/Library/Android/sdk || ANDROID_SDK=$HOME/Android/Sdk
    echo "export ANDROID_SDK=$ANDROID_SDK" >> ~/`[[ $SHELL == *"zsh" ]] && echo '.zshenv' || echo '.bash_profile'`
    ```  
    ![image](https://user-images.githubusercontent.com/25420417/151689938-653d5482-38c4-42c8-aa38-3b2953304d04.png)  

2. Once hit enter after paste the two lines code, then nothing will happen. I checked by using `vim` to check this.  
    `vim ~/.zshenv`  
    then you will see new file `~/.zshenv` file that I didn't have it previously and created with path entered.  
    ![image](https://user-images.githubusercontent.com/25420417/151690030-9d3f83ed-6f20-4f22-8ee6-9ed6683ec648.png)  
      > You can leave type `:q` then enter.  
  
    ![image](https://user-images.githubusercontent.com/25420417/151690120-52f524e1-ddeb-4f11-9594-4f968d12e0ee.png)  

3. You need to add another path for `platform-tools`. Below code will do it automatically as step 1.  
    ```
    echo "export PATH=$HOME/Library/Android/sdk/platform-tools:\$PATH" >> ~/`[[ $SHELL == *"zsh" ]] && echo '.zshenv' || echo '.bash_profile'`
    ```  
    Do same procedure as the step 1. Copy above code and enter it in command and enter.  
    ![image](https://user-images.githubusercontent.com/25420417/151690228-2c504238-85ab-4aaf-bce1-3445289007b1.png)  
  
    Once it is done, go to `~/.zshenv` to see if new path has been added or not. If you can see it as screenshot as below, it worked 😄  
    ![image](https://user-images.githubusercontent.com/25420417/151690282-9fe71ee1-68e4-4d4b-ba92-b78e62cb56c9.png)  
  
4. Use `adb --version` to see if command works.
  > For me, I am not sure why, just `adb` gave me `zsh: segmentation fault  adb`. If it shows message like `zsh: command not found: adb` then you did something wrong.


5. Open the Android Studio then click 'Virtual Device Manager'. Then Click 'Create Device' on the top left corner.
  ![image](https://user-images.githubusercontent.com/25420417/151691680-f1f6b6b7-04ac-4404-b00b-84e35a3b001c.png)
  
6. I think we should choose the latest pixel device with play store installed. Select the model and click 'Next'.
  ![image](https://user-images.githubusercontent.com/25420417/151692035-ec54f8d7-85ac-45de-9393-b6ca4791d82e.png)
  
  We can use second newest API version often it is more stable then the newest version. Select it and click 'Download'. This will take awhile.
  ![image](https://user-images.githubusercontent.com/25420417/151692015-e04c2608-c0b2-44e9-a048-e7af976f5456.png)

  Click 'Finish'.
  ![image](https://user-images.githubusercontent.com/25420417/151692151-c86a7be8-b122-4842-97fb-fe23c392c280.png)

  As you can see the screenshot below, the selected version's 'Download' link is gone and we can click 'Next' button. Click 'Next'.
  ![image](https://user-images.githubusercontent.com/25420417/151692183-20070d12-d642-44db-a520-bf9ce85eabb3.png)

  You can set the custom name on the emulator but I am going for the default one. It has physical device model and API. Click 'Finish' when you are done.
  ![image](https://user-images.githubusercontent.com/25420417/151692227-b172c91f-d60e-494e-96f0-d517f0fac267.png)

  Once you are done, I can see two devices that one I just created and one with the default one it came with. You can click the play button to start emulator.
  ![image](https://user-images.githubusercontent.com/25420417/151692343-2f5de82e-0b05-4d56-9212-d5bd8cb62d83.png)

7. Now, order to run our app on Android device, go to our application directory and run `expo start`. This procedure will be same as IOS simulator. However, for the android device, **you must run the emulator first before attempt to run it the Android device.**

  As screenshot below, I type 'a' after `expo start`. Expo app starts first. I just click the app with our project name ('frontend01') then it will start the app. 
  ![image](https://user-images.githubusercontent.com/25420417/151692678-a9b11a8a-40e2-4ebc-9f87-ad8cad4aa0fe.png)

  If you go to `http://localhost:19002`, you can see the option there to run the app on Android emulator.
  ![image](https://user-images.githubusercontent.com/25420417/151692526-f529103d-2813-4b78-9873-d0f85d0441fe.png)
  
  Well done :smile:


# References
- [React Native](https://reactnative.dev/)
- [Expo](https://docs.expo.dev/workflow/android-studio-emulator/#step-1-set-up-android-studios-tools)
