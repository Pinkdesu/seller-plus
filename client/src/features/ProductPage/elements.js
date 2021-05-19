import styled from 'styled-components';
import { loadingAnimation } from '~/assets/animation';

export const ProductPage = styled.main`
  min-height: 100vh;
  margin-top: 180px;
`;

export const ProductSection = styled.section`
  display: block;
  min-width: 100%;
`;

export const ProductLayout = styled.div`
  width: 100%;
  margin: 0 auto;
  max-width: 960px;
  position: relative;
`;

export const GalleryContent = styled.div`
  width: 66.64%;
`;

export const ProductGallery = styled.div`
  display: flex;
  float: left;
  position: relative;
  padding: 0 10px;
  margin-bottom: 30px;
  width: 100%;
`;

export const GalleryAsideWrapper = styled.div`
  flex-basis: 13.2%;
  flex-grow: 1;
  position: relative;
`;

export const Thumbnails = styled.ul`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  gap: 10px;
  padding-right: 17px;
  margin-top: 20px;
`;

export const ThumbnailsItem = styled.li``;

export const ThumbnailsItemButton = styled.button`
  padding: 0;
  border: none;
  cursor: pointer;
  ${loadingAnimation}

  &::before {
    content: '';
    width: 1px;
    margin-left: -1px;
    float: left;
    height: 0;
    padding-top: 127.2%;
  }

  &::after {
    content: '';
    display: table;
    clear: both;
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 3px 1px #0770cf;
  }
`;

export const ThumbnailsItemImage = styled.img`
  display: block;
  border: solid 2px #ffffff;
  height: 52px;
  width: 40px;
  max-width: 40px;
`;

export const SliderWrapper = styled.div`
  margin-right: 4%;
  flex: 1 0 82.6%;
  overflow: hidden;
  position: relative;
  box-sizing: border-box;
  ${loadingAnimation}

  .keen-slider {
    height: 650px;
  }
`;
