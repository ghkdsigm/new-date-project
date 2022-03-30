<template>
  <div>
    <div class="smokeBg">
      <Search />
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
import Search from "@/components/Search";
export default {
  components: {
    Search,
  },
};
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
