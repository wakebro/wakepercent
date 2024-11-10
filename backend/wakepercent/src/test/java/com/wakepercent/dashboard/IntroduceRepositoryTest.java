package com.wakepercent.dashboard;

import java.util.List;

import com.querydsl.core.types.Projections;
import com.querydsl.core.types.dsl.BooleanExpression;
import com.querydsl.jpa.impl.JPAQueryFactory;
import com.wakepercent.commonEntity.ContentType;
import com.wakepercent.commonEntity.dto.ContentDto;
//import com.wakepercent.commonEntity.dto.QContentDto;
import jakarta.persistence.EntityManager;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.transaction.annotation.Transactional;

import com.wakepercent.commonEntity.Content;

import static com.wakepercent.commonEntity.QContent.content;
import static org.springframework.util.StringUtils.hasText;

@SpringBootTest
@Transactional
class IntroduceRepositoryTest {
    @Autowired IntroduceRepository introduceRepository;
    @Autowired EntityManager em;
    JPAQueryFactory queryFactory;

    @Test
    public void getContentTest() {
        List<Content> contentList = introduceRepository.findAll();

//        for (Content con : contentList) {
//            System.out.println("con = " + con.getContent());
//        }
    }

    @Test
    public void findByContentTypeTest() {
//        queryFactory = new JPAQueryFactory(em);
        ContentType contentType = ContentType.SITE;
        System.out.println("contentType = " + contentType);
        String lang = "ko";
        List<ContentDto> result = introduceRepository.findByContentType(contentType, lang);

//        List<ContentDto> result = queryFactory
//                .select(Projections.constructor(ContentDto.class,
//                        lang.equals("ko") ? content.contentKo : content.contentEn
//                ))
//                .from(content)
//                .where(contentTypeEq(contentType))
//                .fetch();
//        System.out.println("cts.size() = " + result.size());
        for (ContentDto ct : result) {
            System.out.println("ct.getContent() = " + ct.getContent());
        }
    }
//    private BooleanExpression contentTypeEq(ContentType contentType) {
//        return hasText(contentType.toString()) ? content.contentType.eq(contentType) : null;
//    }
}