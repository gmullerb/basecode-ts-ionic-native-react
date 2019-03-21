curl -SL https://services.gradle.org/distributions/gradle-$GRADLE_VERSION-bin.zip -o gradle-bin.zip
unzip gradle-bin.zip -d $TOOLS_HOME
mv $TOOLS_HOME/gradle-$GRADLE_VERSION $TOOLS_HOME/gradle
curl -SL https://dl.google.com/android/repository/sdk-tools-linux-$ANDROID_SDK_TOOLS_HASH.zip -o android-sdk-tools-linux.zip
unzip android-sdk-tools-linux.zip -d $ANDROID_HOME

echo y | $ANDROID_HOME/tools/bin/sdkmanager "tools" "platform-tools"
echo y | $ANDROID_HOME/tools/bin/sdkmanager "build-tools;${ANDROID_BUILD_TOOLS_VERSION}"
echo y | $ANDROID_HOME/tools/bin/sdkmanager "platforms;android-${ANDROID_API_VERSION}"
set yes | $ANDROID_HOME/tools/bin/sdkmanager --licenses
