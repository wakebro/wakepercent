package com.wakepercent;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


@SpringBootApplication
@RestController
public class WakepercentApplication {
	@RequestMapping("/api/")
	public String home() {
		System.out.println("trueㅁ12 = " + true);
		return "Hello Docker 2233322";
	}

	public static void main(String[] args) {
		SpringApplication.run(WakepercentApplication.class, args);
	}

}
