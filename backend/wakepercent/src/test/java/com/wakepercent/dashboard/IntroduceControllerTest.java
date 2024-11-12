package com.wakepercent.dashboard;

import com.wakepercent.commonEntity.ContentType;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.transaction.annotation.Transactional;

import java.util.Map;

import static org.junit.jupiter.api.Assertions.*;
@SpringBootTest
@Transactional
class IntroduceControllerTest {
    @Autowired IntroduceController introduceController;

    @Test
    public void getSiteContentTest() {
        Long userId = 1L;
        ContentType contentType = ContentType.SITE;
        System.out.println("contentType = " + contentType);
        String lang = "ko";
        Map<String, Object> result = introduceController.getSiteContent(
            //userId,
            contentType,
            lang
        );
        System.out.println("result.get(\"content\") = " + result.get("content"));
    }

    @Test
    public void getWebUpdateLogTest() {
        String lang = "ko";
//        Map<String, Object> result = introduceController.getWebUpdateLog(lang);
//        System.out.println("result.get(\"content\") = " + result.get("content"));
    }
    @Test
    public void getExperiencesTest() {
        String lang = "ko";
        Map<String, Object> result = introduceController.getExperiences(lang);
        System.out.println("result.get(\"result\") = " + result.get("result"));
    }
}