package com.xyr;

import android.content.Intent;
import android.util.Log;
import android.widget.Toast;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.modules.core.DeviceEventManagerModule;

/**
 * Created by thinkcentre on 2016/10/28.
 */

public class NativeInterface extends ReactContextBaseJavaModule {

    private  ReactApplicationContext context;

    public NativeInterface(ReactApplicationContext reactContext) {
        super(reactContext);
        context = reactContext;
    }

    @Override
    public String getName() {
        return "NativeInterface";
    }
    @ReactMethod
    public void handleMessage(String msg){
        Toast.makeText(context, msg, Toast.LENGTH_SHORT).show();
        Intent intent = new Intent(context,TestActivity.class);
        intent.addFlags(Intent.FLAG_ACTIVITY_NEW_TASK);
        context.startActivity(intent);
    }
    public void sendMessage(String msg){
        context.getJSModule(DeviceEventManagerModule.RCTDeviceEventEmitter.class).emit("AndroidNativeMsg",msg);
    }
}
