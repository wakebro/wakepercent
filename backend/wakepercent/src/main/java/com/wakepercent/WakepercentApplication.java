package com.wakepercent;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.jdbc.datasource.DriverManagerDataSource;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.sql.DataSource;


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

	@Bean
	public DataSource dataSource() {
		DriverManagerDataSource dataSource = new DriverManagerDataSource();
		dataSource.setDriverClassName("com.mysql.cj.jdbc.Driver");
		dataSource.setUrl("jdbc:mysql://host.docker.internal:3306/wakepercent");
		dataSource.setUsername("wake");
		dataSource.setPassword("My$ql000");
		return dataSource;
	}

}
