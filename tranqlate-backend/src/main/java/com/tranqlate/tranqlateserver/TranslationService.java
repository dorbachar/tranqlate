package com.tranqlate.tranqlateserver;

import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Component;

import com.google.cloud.translate.Language;
import com.google.cloud.translate.Translate;
import com.google.cloud.translate.TranslateOptions;
import com.google.cloud.translate.Translation;
import com.tranqlate.tranqlateserver.authentication.GoogleAuthenticator;
import com.tranqlate.tranqlateserver.json.LanguagesConverter;

import lombok.AllArgsConstructor;

@Component
@AllArgsConstructor
public class TranslationService {
    private static final Logger logger = LoggerFactory.getLogger(TranslationService.class);
    private final GoogleAuthenticator googleAuthenticator;
    private final LanguagesConverter languagesConverter;

    public String translate(final String input, final String sourceLanguage, final String targetLanguage) {
        Translate translate = TranslateOptions.newBuilder()
                .setCredentials(googleAuthenticator.getCredentials())
                .build()
                .getService();
        Translation translation = translate.translate(input,
                Translate.TranslateOption.sourceLanguage(sourceLanguage),
                Translate.TranslateOption.targetLanguage(targetLanguage));

        final String response = "{\"translation\":\"" + translation.getTranslatedText() + "\"}";
        logger.info(response);
        return response;
    }

    public String getLanguages() {
        Translate translate = TranslateOptions.newBuilder()
                .setCredentials(googleAuthenticator.getCredentials())
                .build()
                .getService();
        final List<Language> fromGoogle = translate.listSupportedLanguages();
        final List<String> langsString = languagesConverter.convert(fromGoogle);
        final String response = "{\"languages\": " + langsString + "}";
        logger.info(response);
        return response;
    }

}
