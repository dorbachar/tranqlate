package com.tranqlate.tranqlateserver;

import lombok.AllArgsConstructor;

import org.springframework.stereotype.Component;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;


@CrossOrigin(origins = "http://localhost:3000")
@RestController
@AllArgsConstructor
@Component
public class TranslationController {
    private final TranslationService translationService;

    @GetMapping("/translate")
    public String translateText(@RequestParam String input, @RequestParam String sourceLanguage, @RequestParam String targetLanguage) {
        return translationService.translate(input, sourceLanguage, targetLanguage);
    }

    @GetMapping("/getLanguages")
    public String getLanguages() {
        return translationService.getLanguages();
    }
}
