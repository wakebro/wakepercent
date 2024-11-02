package com.wakepercent.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.Map;

@RestController
public class IntroduceController {
    @GetMapping("/api/about/site")
//    public String site(@RequestParam Map<String, String> params) {
//        System.out.println("?!?!?!?!?!?");
//
//        // 필요한 데이터를 가져와 사용
//        String userId = params.get("userId");
//        String detail = params.get("detail");

//        System.out.println("userId : " + userId);
//        System.out.println("detail : " + detail);
//        return "hi";
//    }
    public Map<String, String> site(@RequestParam String userId,
                       @RequestParam String detail) {
        System.out.println("!!!!!ㄴ!!13!!!!!!ㅌㅌㅌ");
        System.out.println("userId : " + userId);
        System.out.println("detail : " + detail);
        return Map.of("id", "hello", "name", "abc");
    }
}
