package com.tranqlate.tranqlateserver;

import java.io.FileInputStream;
import java.io.IOException;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.google.auth.Credentials;
import com.google.auth.oauth2.GoogleCredentials;
import com.google.cloud.translate.Translate;
import com.google.cloud.translate.TranslateOptions;
import com.google.cloud.translate.Translation;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class TranslationController {

    @GetMapping("/translate")
    public String translateText(@RequestParam String input, @RequestParam String sourceLanguage, @RequestParam String targetLanguage) throws IOException {

        Credentials credentials = GoogleCredentials.fromStream(new FileInputStream("src/main/resources/tranqlate-dfc9ca7e63b3.json"));
        Translate translate = TranslateOptions.newBuilder().setCredentials(credentials).build().getService();
        Translation translation = translate.translate(input,
                Translate.TranslateOption.sourceLanguage(sourceLanguage),
                Translate.TranslateOption.targetLanguage(targetLanguage));

        final LocalDateTime now = LocalDateTime.now();
        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss");
        String time = now.format(formatter);

        final String fullResponse = "{\"input\":\"" + input + "\"," +
                "\"translation\":\"" + translation.getTranslatedText() + "\"," +
                "\"sourceLanguage\":\"" + translation.getSourceLanguage() + "\"," +
                "\"targetLanguage\":\"" + targetLanguage + "\"," +
                "\"time\":\"" + time + "\"}";
        System.out.println(fullResponse);

        return fullResponse;
    }
}
