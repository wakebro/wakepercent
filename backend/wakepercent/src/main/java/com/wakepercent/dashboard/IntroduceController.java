package com.wakepercent.dashboard;

import java.util.Map;

import com.wakepercent.commonEntity.Content;
import com.wakepercent.commonEntity.ContentType;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import lombok.RequiredArgsConstructor;

@RestController
@RequiredArgsConstructor
public class IntroduceController {
    private final IntroduceService introduceService;
    @GetMapping("/api/about/site")
    public Map<String, String> site(@RequestParam Long userId,
                                    @RequestParam ContentType type,
                                    @RequestParam String lang) {
        System.out.println("userId = " + userId);
        System.out.println("type = " + type);
        System.out.println("lang = " + lang);
        System.out.println("!!!");

        return Map.of("id", "hello", "name", "abc");
    }

}
