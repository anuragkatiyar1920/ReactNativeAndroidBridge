package com.reactnativeandroidbridge;

import android.text.TextUtils;
import android.widget.Toast;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

import javax.annotation.Nonnull;

public class ToastModule extends ReactContextBaseJavaModule {

    public ToastModule(@Nonnull ReactApplicationContext reactContext) {
        super(reactContext);
    }

    @Nonnull
    @Override
    public String getName() {
        return "ToastModule";
    }

    @ReactMethod
    public void showMessage(String message) {
        if (TextUtils.isDigitsOnly(message)) {
            Toast.makeText(getReactApplicationContext(), "This message is showing from Android", Toast.LENGTH_LONG).show();
        } else {
            Toast.makeText(getReactApplicationContext(), message, Toast.LENGTH_LONG).show();
        }
    }
}
