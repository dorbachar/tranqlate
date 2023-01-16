package com.tranqlate.tranqlateserver.authentication;

import lombok.Getter;

import java.io.FileInputStream;
import java.io.IOException;

import com.google.auth.Credentials;
import com.google.auth.oauth2.GoogleCredentials;

@Getter
public class GoogleAuthenticator {
    private final Credentials credentials;

    public GoogleAuthenticator(String authParamsPath) throws IOException {
        this.credentials = GoogleCredentials.fromStream(new FileInputStream(authParamsPath));
    }
}
