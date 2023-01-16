package com.tranqlate.tranqlateserver.json;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.stereotype.Component;

import com.fasterxml.jackson.databind.util.StdConverter;
import com.google.cloud.translate.Language;

@Component
public class LanguagesConverter extends StdConverter<List<Language>, List<String>> {

    @Override
    public List<String> convert(final List<Language> languages) {
        return languages.stream()
                .map(language -> {
                    final String name = language.getName();
                    final String code = language.getCode();

                    return "{\"name\":\"" + name + "\",\"code\":\"" + code + "\"}";
                })
                .collect(Collectors.toList());
    }
}
