package com.wakepercent.commonEntity;

import org.springframework.core.convert.converter.Converter;

public class ContentTypeConverter implements Converter<String, ContentType> {
    @Override
    public ContentType convert(String contentTypeStr) {
        return ContentType.of(contentTypeStr.toUpperCase());
    }
}
