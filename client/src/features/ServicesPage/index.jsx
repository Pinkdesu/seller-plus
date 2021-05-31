import React from 'react';
import * as S from './elements';
import TextField from '~/features/Common/TextField';
import Button from '~/features/Common/Button';

const ServicesPage = () => {
  return (
    <S.ServicesMain>
      <S.Content>
        <S.ServiceWrapper>
          <S.ServiceInfoWrapper>
            <S.ServiceInfoName>Газификация домов</S.ServiceInfoName>
            <S.ServiceDescriptionWrapper>
              <S.ServiceDescription>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
                ullam magnam ducimus nihil officiis accusantium distinctio
                delectus rerum molestias, velit asperiores aspernatur expedita
                reiciendis non fugiat, tempore odio accusamus. Non. Eligendi
                ipsa alias dolor error laborum odio amet earum fuga molestiae
                expedita! Saepe, iure! Incidunt corrupti amet, ullam facere
                consequatur soluta, possimus laborum est excepturi quaerat sit
                modi totam! Corrupti! Ut ea dicta nesciunt voluptatem voluptates
                est, eum, expedita quidem quos, nisi amet quasi aperiam quis ab!
                Tempora exercitationem sed ab hic voluptatum, delectus
                distinctio fuga officia iure, odio commodi. Libero, sint atque
                necessitatibus fugiat velit in possimus ipsam rerum consequuntur
                repellat laborum deserunt modi. Voluptatum vitae ab quasi,
                accusantium facere impedit quas quidem, iure officiis fugiat,
                autem officia aperiam! Praesentium blanditiis doloremque modi,
                minima deleniti fuga commodi! Maiores vero expedita quia, nobis
                beatae odit fuga, molestiae modi vel cumque eaque autem quos ad
                laboriosam incidunt voluptatum nemo commodi! Veniam! Nihil ipsam
                laboriosam inventore veritatis obcaecati non deserunt.
                Distinctio nulla error pariatur aliquid deserunt harum? Odit
                doloribus minima inventore eos adipisci accusamus veritatis?
                Nulla odio voluptatibus sapiente ratione numquam iusto?
              </S.ServiceDescription>
            </S.ServiceDescriptionWrapper>
          </S.ServiceInfoWrapper>
          <S.ServiceApplicationWrapper>
            <S.ServiceApplication>
              <S.ApplicationHeader>
                Оставьте заявку, и мы свяжемся с вами в самое ближайшее время
              </S.ApplicationHeader>
              <S.ApplicationForm>
                <TextField label="Имя" />
                <TextField label="Фамилия" />
                <TextField label="Телефон" />
                <Button text="Оставить" />
              </S.ApplicationForm>
            </S.ServiceApplication>
          </S.ServiceApplicationWrapper>
        </S.ServiceWrapper>
      </S.Content>
    </S.ServicesMain>
  );
};

export default ServicesPage;
