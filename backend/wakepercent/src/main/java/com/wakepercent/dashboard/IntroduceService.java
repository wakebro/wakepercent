package com.wakepercent.dashboard;

import com.wakepercent.commonEntity.Content;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class IntroduceService {
    private final IntroduceRepository introduceRepository;

    public void getSiteIntroduce() {
        List<Content> introduce = introduceRepository.findAll();
    }
}
