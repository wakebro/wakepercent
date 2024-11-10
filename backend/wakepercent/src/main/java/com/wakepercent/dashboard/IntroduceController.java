package com.wakepercent.dashboard;

import java.util.HashMap;
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
    public Map<String, Object> getSiteContent(// @RequestParam Long userId,
                                    @RequestParam ContentType contentType,
                                    @RequestParam String lang) {
        System.out.println("???");
        Map<String, Object> resultMap = new HashMap<>();
        resultMap.put("result", introduceService.getContent(contentType, lang));
        return resultMap;
    }

}
