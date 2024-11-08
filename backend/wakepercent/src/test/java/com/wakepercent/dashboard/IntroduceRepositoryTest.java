package com.wakepercent.dashboard;

import java.util.List;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.transaction.annotation.Transactional;

import com.wakepercent.commonEntity.Content;
@SpringBootTest
@Transactional
class IntroduceRepositoryTest {
    @Autowired IntroduceRepository introduceRepository;
    @Test
    public void getContentTest() {
        List<Content> contentList = introduceRepository.findAll();

        for (Content con : contentList) {
            System.out.println("con = " + con.getContent());
        }
    }
}