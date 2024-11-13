package com.wakepercent.dashboard;

import java.util.HashMap;
import java.util.Map;

import com.wakepercent.commonEntity.Content;
import com.wakepercent.commonEntity.ContentType;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import lombok.RequiredArgsConstructor;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/about")
public class IntroduceController {
    private final IntroduceService introduceService;
    @GetMapping("/site/introduce")
    public Map<String, Object> getSiteContent(// @RequestParam Long userId,
                                    @RequestParam ContentType contentType,
                                    @RequestParam String lang) {
        Map<String, Object> resultMap = new HashMap<>();
        resultMap.put("result", introduceService.getContent(contentType, lang));
        return resultMap;
    }

    @GetMapping("/site/web-update-log")
    public Map<String, Object> getWebUpdateLog( @RequestParam String lang) {
        System.out.println("web-update-log");
        Map<String, Object> resultMap = new HashMap<>();
        resultMap.put("result", introduceService.getWebUpdateLog(lang));
        return resultMap;
    }

    @GetMapping("/me/experiences")
    public Map<String, Object> getExperiences( @RequestParam String lang) {
        Map<String, Object> resultMap = new HashMap<>();
        resultMap.put("result", introduceService.getExperiences(lang));
        return resultMap;
    }

    @GetMapping("/me/projects")
    public Map<String, Object> getProjects( @RequestParam String lang) {
        Map<String, Object> resultMap = new HashMap<>();
        resultMap.put("result", introduceService.getProjects(lang));
        return resultMap;
    }

    @GetMapping("/me/project")
    public Map<String, Object> getProject(@RequestParam Long id,
                            @RequestParam String lang) {
        Map<String, Object> resultMap = new HashMap<>();
        resultMap.put("result", introduceService.getProjectDetail(id, lang));
        return resultMap;
    }
}
