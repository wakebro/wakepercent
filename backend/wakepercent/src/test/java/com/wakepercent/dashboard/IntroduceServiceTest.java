package com.wakepercent.dashboard;

import com.wakepercent.commonEntity.ContentType;
import com.wakepercent.commonEntity.dto.ContentDto;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
@SpringBootTest
@Transactional
class IntroduceServiceTest {
    @Autowired IntroduceService introduceService;

    @Test
    public void getContentTest() {
        ContentType contentType = ContentType.SITE;
        System.out.println("contentType = " + contentType);
        String lang = "ko";
        ContentDto result = introduceService.getContent(contentType, lang);
        System.out.println("result.getContent() = " + result.getContent());
    }
}