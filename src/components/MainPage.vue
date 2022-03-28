<template>
  <div>
    <div class="smokeBg">
      <form id="searchFrm">
        <div class="search-box">
          <input
            type="search"
            id="keyword"
            name="keyword"
            placeholder="검색어를 입력해 주세요"
            class="input-text"
            title="검색어를 입력해 주세요"
          />
          <button type="button" class="btn-search" title="검색하기">
            검색
          </button>
        </div>
      </form>
    </div>
    <div class="wrap">
      <div class="content">
        <div class="title">
          <h1 class="title-area">
            <span class="label"
              ><strong style="font-weight: 700">팀 순위</strong></span
            >
          </h1>
        </div>
        <div class="tb_contents">
          <table>
            <caption>
              KBO 팀 순위표
            </caption>
            <colgroup>
              <col style="width: 126px" />
              <col />
              <col style="width: 126px" />
              <col style="width: 126px" />
              <col style="width: 126px" />
              <col style="width: 126px" />
              <col style="width: 126px" />
              <col style="width: 126px" />
            </colgroup>
            <thead>
              <tr>
                <th scope="col">Num</th>
                <th scope="col">팀</th>
                <th scope="col">경기수</th>
                <th scope="col">승</th>
                <th scope="col">무</th>
                <th scope="col">패</th>
                <th scope="col">승률</th>
                <th scope="col">바로가기</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>
                  <span>KT</span>
                </td>
                <td>11</td>
                <td>5</td>
                <td>4</td>
                <td>2</td>
                <td>0.714</td>
                <td>
                  <a href="javascript:;">LINK</a>
                </td>
              </tr>
              <tr>
                <td>1</td>
                <td>
                  <span>KT</span>
                </td>
                <td>11</td>
                <td>5</td>
                <td>4</td>
                <td>2</td>
                <td>0.714</td>
                <td>
                  <a href="javascript:;">LINK</a>
                </td>
              </tr>
              <tr>
                <td>1</td>
                <td>
                  <span>KT</span>
                </td>
                <td>11</td>
                <td>5</td>
                <td>4</td>
                <td>2</td>
                <td>0.714</td>
                <td>
                  <a href="javascript:;">LINK</a>
                </td>
              </tr>
              <tr>
                <td>1</td>
                <td>
                  <span>KT</span>
                </td>
                <td>11</td>
                <td>5</td>
                <td>4</td>
                <td>2</td>
                <td>0.714</td>
                <td>
                  <a href="javascript:;">LINK</a>
                </td>
              </tr>
              <tr>
                <td>1</td>
                <td>
                  <span>KT</span>
                </td>
                <td>11</td>
                <td>5</td>
                <td>4</td>
                <td>2</td>
                <td>0.714</td>
                <td>
                  <a href="javascript:;">LINK</a>
                </td>
              </tr>
              <tr>
                <td>1</td>
                <td>
                  <span>KT</span>
                </td>
                <td>11</td>
                <td>5</td>
                <td>4</td>
                <td>2</td>
                <td>0.714</td>
                <td>
                  <a href="javascript:;">LINK</a>
                </td>
              </tr>
              <tr>
                <td>1</td>
                <td>
                  <span>KT</span>
                </td>
                <td>11</td>
                <td>5</td>
                <td>4</td>
                <td>2</td>
                <td>0.714</td>
                <td>
                  <a href="javascript:;">LINK</a>
                </td>
              </tr>
              <tr>
                <td>1</td>
                <td>
                  <span>KT</span>
                </td>
                <td>11</td>
                <td>5</td>
                <td>4</td>
                <td>2</td>
                <td>0.714</td>
                <td>
                  <a href="javascript:;">LINK</a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.smokeBg {
  min-height: 300px;
  overflow: hidden;
  background-image: url("~@/assets/images/imgbg.jpg");
  background-size: cover;
  background-position: bottom;
  position: relative;
  &::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    bottom: 0;
    background: linear-gradient(to top, #00000078, rgb(0 0 0 / 43%));
    display: block;
  }
  img {
    width: 100%;
  }
  #searchFrm {
    width: 515px;
    height: 60px;
    margin: auto;
    position: absolute;
    text-align: center;
    align-items: center;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    line-height: 100px;
    .search-box {
      input {
        background: transparent;
        border: 1px solid transparent;
        border-bottom: 1px solid #454545;
        padding: 15px;
        color: #fff;
        font-size: 23px;
        min-width: 450px;
        display: block;
        box-sizing: border-box;
        font-weight: 100;
        &:focus {
          border-top: 1px solid transparent;
          border-bottom: 1px solid #fff;
          outline: none;
        }
        &::placeholder {
          font-weight: 500;
          font-size: 23px;
          color: rgb(141, 141, 141);
        }
      }
      .btn-search {
        overflow: hidden;
        display: block;
        position: absolute;
        right: 0;
        top: 0;
        width: 64px;
        height: 100%;
        text-indent: -9999px;
        border: none;
        background: transparent url("~@/assets/images/btn-main-search.png")
          no-repeat center;
        &:hover {
          cursor: pointer;
        }
      }
    }
  }
}

.title-area {
  font-weight: 400;
  font-size: 23px;
  label {
    display: inline-block;
    vertical-align: middle;
    color: #fff;
    strong {
      font-weight: 500;
    }
  }
}

.tb_contents {
  table {
    width: 100%;
    caption {
      text-indent: -99999px;
    }
    th {
      text-align: center;
      color: #96f2d7;
      font-weight: 400;
      height: 56px;
      font-size: 16px;
      padding: 0 20px;
      border-bottom: 1px solid #2f2f2f;
      line-height: 56px;
    }
    td {
      text-align: center;
      height: 56px;
      font-size: 16px;
      color: #fff;
      padding: 0 20px;
      border-bottom: 1px solid #2f2f2f;
      line-height: 56px;
    }
  }
}
</style>
