/*
 * @Author: maoguijun
 * @Date: 2019-12-27 11:36:21
 * @LastEditors  : maoguijun
 * @LastEditTime : 2019-12-27 15:22:31
 * @FilePath: \demoRnc\android\app\src\main\java\com\demornc\MainActivity.java
 */
package com.demornc;

import com.facebook.react.ReactActivity;
import com.facebook.react.ReactActivityDelegate;
import com.facebook.react.ReactRootView;
import com.swmansion.gesturehandler.react.RNGestureHandlerEnabledRootView;

public class MainActivity extends ReactActivity {

  /**
   * Returns the name of the main component registered from JavaScript. This is
   * used to schedule rendering of the component.
   */
  @Override
  protected String getMainComponentName() {
    return "demoRnc";
  }

  @Override
  protected ReactActivityDelegate createReactActivityDelegate() {
    return new ReactActivityDelegate(this, getMainComponentName()) {
      @Override
      protected ReactRootView createRootView() {
        return new RNGestureHandlerEnabledRootView(MainActivity.this);
      }
    };
  }
}
