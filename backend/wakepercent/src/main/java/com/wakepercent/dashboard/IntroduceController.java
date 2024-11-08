package com.wakepercent.dashboard;

import java.util.Map;

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
                       @RequestParam String detail) {
        introduceService.getSiteIntroduce();
        return Map.of("id", "hello", "name", "abc");
    }
}
