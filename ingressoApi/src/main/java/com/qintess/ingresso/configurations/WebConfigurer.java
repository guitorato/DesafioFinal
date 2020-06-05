package com.qintess.ingresso.configurations;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class WebConfigurer implements WebMvcConfigurer {
	
	@Override
	public void addResourceHandlers(final ResourceHandlerRegistry registry) {
		registry.addResourceHandler("/api/images/**")
				.addResourceLocations("file:///" + System.getProperty("user.dir")+"src/main/images/");
	}
	
	 @Override
	    public void addCorsMappings(CorsRegistry registry) {
	        registry.addMapping("/api/**")
	            .allowedOrigins("http://localhost:4200")
	            .exposedHeaders("x-access-token")
	            .allowedMethods("GET", "POST", "PUT", "DELETE", "OPTIONS",  "HEAD", "TRACE", "CONNECT");
	    }

}
